import { useIntl } from 'umi';

export const IntlInitJsx = (page: string) => {
  const useintl = useIntl();
  return (id: string, pageName: string = page) => {
    const intlId = id == undefined || id == '' ? pageName : pageName + '.' + id;
    return (
      <div data-test-id={intlId} style={{ display: 'inline-block' }}>
        {useintl.formatMessage({ id: intlId })}
      </div>
    );
  };
};
