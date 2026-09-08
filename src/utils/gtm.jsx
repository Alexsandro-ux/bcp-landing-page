export const trackGTMEvent = ({
  event = 'experiment_event', 
  experimentId = 'bcp_banner_test_v1', 
  action, 
  variant, 
  label 
}) => {

  window.dataLayer = window.dataLayer || [];

  const payload = {
    event,
    experimentId,
    action,
    variant,
    label
  };

  window.dataLayer.push(payload);

  console.log('[GTM Event Push]:', payload);
};