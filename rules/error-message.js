const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {

  function check(node, reporter) {
    const customErrorMessage = localStorage.getItem(`customErrorMessage:${ node.id }`);
    if (customErrorMessage) {
      reporter.report(node.id, customErrorMessage);
    }
  }

  return {
    check: check
  };
};
