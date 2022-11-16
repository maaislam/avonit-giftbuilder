const gaTracking = (label) => {
  const labelMessage = 'Test ID: AG110 Variation: ' + 1 + ' Label: ' + label;

  window.ga('send', {
    hitType: 'event',
    eventCategory: 'Experimentation',
    eventAction: 'Avon - AG110',
    eventLabel: labelMessage,
  });
};

export default gaTracking;
