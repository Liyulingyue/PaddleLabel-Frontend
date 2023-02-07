import { List, Space } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import PPColorBall from '../../PPColorBall';
import type { Annotation } from '@/models/annotation';
export type PPAnnotationListItemProps = {
  active: boolean;
  annotation: Annotation;
  // Currently, only support modify visibility and color
  onAnnotationModify: (annotation: Annotation) => void;
  onAnnotationDelete: (annotation: Annotation) => void;
  onClick: (annotation: Annotation) => void;
};

const Component: React.FC<PPAnnotationListItemProps> = (props) => {
  const annotation = { ...props.annotation };
  // const [invisible, setInvisible] = useState(annotation.invisible);
  const [lastClickTime, setLastClickTime] = useState<number>(0);

  // useEffect(() => {
  //   setInvisible(props.annotation.invisible);
  // }, [props.annotation.invisible]);

  const item = (
    <List.Item
      className={`${styles.listItem} ${props.active ? styles.listItemActive : ''}`}
      unselectable="on"
      onClick={() => {
        props.onClick(annotation);
      }}
    >
      <Space align="center" size={5}>
        {/* {history?.location?.pathname !== '/semantic_segmentation' && (
          <a
            className={styles.eye}
            style={{
              backgroundImage: invisible ? 'url(./pics/hide.png)' : 'url(./pics/show.png)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setInvisible(!invisible);
              props.onAnnotationModify(annotation);
            }}
          />
        )}{' '}
        {history?.location?.pathname !== '/semantic_segmentation' && (
          <span className={styles.annotationId}>{annotation?.frontendId}</span>
        )} */}
        <span className={styles.labelName}>{annotation?.label?.name}</span>
        <PPColorBall color={annotation?.label?.color} />
      </Space>

      <a
        className={styles.delete}
        onClick={(e) => {
          e.stopPropagation();
          const time = new Date().getTime();
          if (time - lastClickTime < 300) return;
          setLastClickTime(time);
          props.onAnnotationDelete(annotation);
        }}
      />
    </List.Item>
  );
  return item;
};
export default Component;
