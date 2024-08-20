import { uneval } from 'devalue'

const root = document.querySelector('[r-data]')

const callback = (mutations) => {
  console.log(mutations)
  for (const mutation of mutations) {
    if (mutation.type === 'attributes') {
      const data = eval(`(${root.getAttribute('r-data')})`)
      const deps = document.querySelectorAll('[r-text]')
      for (const dep of deps) {
        dep.textContent = data[dep.getAttribute('r-text')]
      }
    }
  }
}

const observer = new MutationObserver(callback)
observer.observe(root, { attributeFilter: ['r-data'] })

const btn = document.querySelector('[r-click]')
btn.addEventListener('click', () => {
  const data = eval(`(${root.getAttribute('r-data')})`)
  const expr = btn.getAttribute('r-click')
  const newData = eval(`${expr};data`)
  root.setAttribute('r-data', uneval(newData))
})
