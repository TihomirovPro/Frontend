const createModalStyles = (options) => {
  const style = document.createElement('style')

  const modalBackground = options.modalBackground
  const maxWidthContent = options.maxWidthContent

  style.innerHTML = `
    .modal {
      overflow: hidden auto;
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      padding: 40px 0;
      text-align: center;
      background-color: ${modalBackground};
    }

    .modal:before {
      display: inline-block;
      content: '';
      height: 100%;
      vertical-align: middle;
    }

    .modal__container {
      display: inline-block;
      vertical-align: middle;
      max-width: ${maxWidthContent};
    }

    .modal__close {
      position: fixed;
      top: 40px;
      right: 40px;
      width: 30px;
      height: 30px;
    }

    .modal__close:after,
    .modal__close:before {
      position: absolute;
      content: '';
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
      transform: rotate(45deg);
    }

    .modal__close:before {
      transform: rotate(-45deg)
    }

    .scrollbarMeasure {
      width: 50px;
      height: 50px;
      overflow-y: scroll;
      visibility: hidden;
    }

    .fadeIn {
      animation: fadeIn .5s
    }

    .fadeOut {
      animation: fadeOut .5s
    }

    @keyframes fadeIn {
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1
      }
      to {
        opacity: 0
      }
    }
  `
  document.head.appendChild(style)
}

export default createModalStyles
