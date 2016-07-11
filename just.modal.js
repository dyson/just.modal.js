/*! just.modal.js v0.0.1 | MIT License | dysonsimmons.com/library.modal */

(function() {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var modalOverlayId = 'modal-overlay';
  var modalContentId = 'modal-content-wrapper';
  var modalContentClass = 'modal-content';
  var modalTargetData = 'data-modal-target';
  var modalOverlay, modalContentWrapper;

  var Modal = function() {
  };

  Modal.prototype.init = function() {
    modalOverlay = document.querySelector('#'+modalOverlayId);
    modalContentWrapper = document.querySelector('#'+modalContentId);

    if (!modalOverlay || !modalContentWrapper) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = modalOverlayId;
      document.body.insertAdjacentElement('beforeend', modalOverlay);

      modalContentWrapper = document.createElement('div');
      modalContentWrapper.id = modalContentId;
      modalOverlay.insertAdjacentElement('beforeend', modalContentWrapper);
    }
  };

  // EVENT HANDLERS
  // ==============

  Modal.prototype.openModal = function(event) {
    if (event.target.className == 'modal') {
      var modalTarget = event.target.getAttribute(modalTargetData);
      var content = document.querySelector('#' + modalTarget);

      modalContentWrapper.appendChild(content);
      modalOverlay.style.display='block';

      event.preventDefault();
      event.stopPropagation();
    }
  };

  Modal.prototype.closeModal= function(event) {
    if(event.target.id == 'modal-overlay') {
      event.target.style.display = 'none';
      var modalContent =  modalContentWrapper.querySelector('.'+modalContentClass);
      document.body.insertAdjacentElement('beforeend', modalContent);

      event.stopPropagation();
    }
  };

  // APPLY TO EVENTS
  // ===============

  document.addEventListener('click', function(event) {
    Modal.prototype.openModal(event);
    Modal.prototype.closeModal(event);
  });

  document.addEventListener('DOMContentLoaded', function() {
    Modal.prototype.init();
  });

})();

