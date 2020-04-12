const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports manual tasks being used.
 */
module.exports = function() {

  function check(node, reporter) {
    const customWarningMessage = localStorage.getItem(`customWarningMessage:${ node.id }`);
    if (customWarningMessage) {
      reporter.report(node.id, customWarningMessage);
    }
  }

  return {
    check: check
  };
};
