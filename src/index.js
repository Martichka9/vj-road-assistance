import './styles/styles.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = "halloo!!"

  return element;
}

document.body.appendChild(component());