import React, { useEffect, useState } from 'react';
import { Spin, message } from 'antd';
import { history } from 'umi';
import styles from './index.less';
import PPLabelPageContainer from '@/components/PPLabelPage/PPLabelPageContainer';
import PPToolBarButton from '@/components/PPLabelPage/PPToolBarButton';
import PPToolBar from '@/components/PPLabelPage/PPToolBar';
import PPLabelList from '@/components/PPLabelPage/PPLabelList';
import PPStage from '@/components/PPLabelPage/PPStage';
import PPAnnotationList from '@/components/PPLabelPage/PPAnnotationList';
import { PageInit } from '@/services/utils';
import type { Annotation } from '@/models/Annotation';
import PPRectangle from '@/components/PPDrawTool/PPRectangle';
import PPProgress from '@/components/PPLabelPage/PPProgress';
import { IntlInitJsx } from '@/components/PPIntl';

const Page: React.FC = () => {
  // todo: change to use annotation
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [frontendId, setFrontendId] = useState<number>(0);
  const tbIntl = IntlInitJsx('pages.toolBar');

  const { tool, loading, scale, annotation, task, data, project, label, annHistory } = PageInit(
    useState,
    useEffect,
    {
      effectTrigger: {
        postTaskChange: (allLabels, allAnns) => {
          annHistory.init();
          annHistory.record({ annos: allAnns });
        },
      },
      label: {
        oneHot: true,
        postSelect: () => {
          annotation.setCurr(undefined);
          setFrontendId(0);
        },
        preUnsetCurr: preCurrLabelUnset,
      },
      tool: { defaultTool: 'mover' },
    },
  );

  function preCurrLabelUnset() {
    annotation.setCurr(undefined);
    setFrontendId(0);
    console.log('preCurrLabelUnset');
    tool.setCurr('mover');
  }

  const setCurrentAnnotation = (anno?: Annotation) => {
    console.log('setCurrentAnnotation');
    annotation.setCurr(anno);
    if (!anno?.frontendId) setFrontendId(0);
    else setFrontendId(anno.frontendId);
  };

  const onAnnotationModify = (anno: Annotation) => {
    // console.log('modifyAnnoByFrontendId:', anno);
    const newAnnos = [];
    for (const item of annotation.all) {
      if (item.frontendId == anno.frontendId) {
        newAnnos.push(anno);
      } else {
        newAnnos.push(item);
      }
    }
    setCurrentAnnotation(anno);
    annotation.setAll(newAnnos);
    // console.log('save invoked', anno.annotationId);
  };

  useEffect(() => {
    annHistory.init();
  }, []);

  function onFinishEdit() {
    annHistory.record({ annos: annotation.all, currAnno: annotation.curr });
    console.log('finish before', annotation.curr);
    if (!annotation.curr) return;
    if (!annotation.curr.result || annotation.curr.result.split(',').length != 4) return;
    if (annotation?.curr?.annotationId == undefined) {
      console.log('finish', data.curr, annotation.curr);
      annotation.create(annotation?.curr);
    } else {
      annotation.update(annotation?.curr);
    }
    // console.log('finish after', annotation.curr);
    message.success(tbIntl('saveSuccess'));
    // console.log('tool', tool.curr);
    if (tool.curr == 'rectangle') setCurrentAnnotation(undefined);
  }

  const drawToolParam = {
    dataId: data.curr?.dataId,
    currentLabel: label.curr,
    scale: scale.curr,
    currentTool: tool.curr,
    annotations: annotation.all,
    currentAnnotation: annotation.curr,
    onAnnotationAdd: (anno: Annotation) => {
      const newAnnos = annotation.all.concat([anno]);
      annotation.setAll(newAnnos);
      setCurrentAnnotation(anno);
    },
    onAnnotationModify: onAnnotationModify,
    modifyAnnoByFrontendId: onAnnotationModify,
    onMouseUp: onFinishEdit,
    frontendIdOps: { frontendId: frontendId, setFrontendId: setFrontendId },
  };

  const rectagle = PPRectangle(drawToolParam);

  const drawTool = { polygon: rectagle, brush: undefined };

  return (
    <PPLabelPageContainer className={styles.det}>
      <PPToolBar>
        <PPToolBarButton
          imgSrc="./pics/buttons/rectangle.png"
          active={tool.curr == 'rectangle'}
          onClick={() => {
            if (!label.curr) {
              message.error(tbIntl('chooseCategoryFirst'));
              return;
            }
            tool.setCurr('rectangle');
            setCurrentAnnotation(undefined);
          }}
        >
          {tbIntl('rectangle')}
        </PPToolBarButton>
        <PPToolBarButton
          active={tool.curr == 'editor'}
          imgSrc="./pics/buttons/edit.png"
          onClick={() => {
            tool.setCurr('editor');
          }}
        >
          {tbIntl('edit')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/zoom_in.png"
          onClick={() => {
            scale.change(0.1);
          }}
        >
          {tbIntl('zoomIn')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/zoom_out.png"
          onClick={() => {
            scale.change(-0.1);
          }}
        >
          {tbIntl('zoomOut')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/save.png"
          onClick={() => {
            annotation.pushToBackend(data.curr?.dataId);
          }}
        >
          {tbIntl('save')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/move.png"
          active={tool.curr == 'mover'}
          onClick={() => {
            tool.setCurr('mover');
          }}
        >
          {tbIntl('move')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/prev.png"
          onClick={() => {
            const res = annHistory.backward();
            if (res) {
              annotation.setAll(res.annos);
              setCurrentAnnotation(res.currAnno);
              annotation.pushToBackend(data.curr?.dataId, res.annos);
            }
          }}
        >
          {tbIntl('unDo')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/next.png"
          onClick={() => {
            const res = annHistory.forward();
            if (res) {
              annotation.pushToBackend(data.curr?.dataId, res.annos);
              setCurrentAnnotation(res.currAnno);
            }
          }}
        >
          {tbIntl('reDo')}
        </PPToolBarButton>
        <PPToolBarButton
          imgSrc="./pics/buttons/clear_mark.png"
          onClick={() => {
            annotation.clear();
            annHistory.record({ annos: [] });
          }}
        >
          {tbIntl('clearMark')}
        </PPToolBarButton>
      </PPToolBar>
      <div id="dr" className="mainStage">
        <Spin tip="loading" spinning={!!loading.curr}>
          <div className="draw">
            <PPStage
              scale={scale.curr}
              annotations={annotation.all}
              currentTool={tool.curr}
              currentAnnotation={annotation.curr}
              setCurrentAnnotation={setCurrentAnnotation}
              onAnnotationModify={onAnnotationModify}
              onAnnotationModifyComplete={() => {}}
              frontendIdOps={{ frontendId: frontendId, setFrontendId: setFrontendId }}
              imgSrc={data.imgSrc}
              transparency={100}
              onAnnotationAdd={(anno) => {
                const newAnnos = annotation.all.concat([anno]);
                annotation.setAll(newAnnos);
              }}
              drawTool={drawTool}
              threshold={0}
            />
          </div>
          <div className="pblock">
            <PPProgress task={task} project={project} />
          </div>
          <div
            className="prevTask"
            data-test-id="prevTask"
            onClick={() => {
              if (!task.prevTask()) {
                return;
              }
              setCurrentAnnotation(undefined);
            }}
          />
          <div
            className="nextTask"
            data-test-id="nextTask"
            onClick={() => {
              if (!task.nextTask()) {
                return;
              }
              setCurrentAnnotation(undefined);
            }}
          />
        </Spin>
      </div>
      <PPToolBar disLoc="right">
        <PPToolBarButton
          imgSrc="./pics/buttons/data_division.png"
          onClick={() => {
            history.push(`/project_overview?projectId=${project.curr.projectId}`);
          }}
        >
          {tbIntl('projectOverview')}
        </PPToolBarButton>
        {/* <PPToolBarButton
          imgSrc="./pics/buttons/data_division.png"
          onClick={() => {
            history.push(`/ml?projectId=${project.curr.projectId}`);
          }}
        >
          {'ML Settings'}
        </PPToolBarButton> */}
      </PPToolBar>
      <div className="rightSideBar">
        <PPLabelList
          labels={label.all}
          activeIds={label.activeIds}
          onLabelSelect={label.onSelect}
          onLabelModify={() => {}}
          onLabelDelete={label.remove}
          onLabelAdd={(lab) => {
            label.create({ ...lab, projectId: project.curr.projectId }).then((newLabel) => {
              setCurrentAnnotation(undefined);
              label.setCurr(newLabel);
            });
          }}
        />
        <PPAnnotationList
          disabled={false}
          currAnnotation={annotation.curr}
          annotations={annotation.all}
          onAnnotationSelect={(selectedAnno) => {
            if (!selectedAnno?.delete) setCurrentAnnotation(selectedAnno);
            console.log(selectedAnno);
          }}
          onAnnotationAdd={() => {
            console.log('onAnnotationAdd');
            setCurrentAnnotation(undefined);
          }}
          onAnnotationModify={() => {}}
          onAnnotationDelete={(anno: Annotation) => {
            annotation.setAll(annotation.all.filter((x) => x.frontendId != anno.frontendId));
            setCurrentAnnotation(undefined);
            annotation.remove(anno);
          }}
        />
      </div>
    </PPLabelPageContainer>
  );
};

export default Page;
