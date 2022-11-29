const gaTracking = (label) => {
  const labelMessage = 'Test ID: AWE022 Variation: ' + 1 + ' Label: ' + label;

  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Experimentation',
    eventAction: 'Avon - AWE022',
    eventLabel: labelMessage,
  });
};

export default gaTracking;
