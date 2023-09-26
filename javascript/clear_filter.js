class ClearFilter {

    static main() {
        ['txt', 'img'].forEach((mode) => {
            const search_node = document.getElementById(mode + '2img_extra_search')
            const search_field = search_node.querySelector('textarea')

            const refresh_btn = document.getElementById(mode + '2img_extra_refresh')

            const clear_btn = refresh_btn.cloneNode()
            clear_btn.classList.add('tool')
            clear_btn.classList.remove('hidden')
            clear_btn.classList.remove('secondary')
            clear_btn.classList.remove('gradio-button')
            clear_btn.id = mode + '2img_extra_clearsearch'
            clear_btn.innerHTML = "\u2716"

            clear_btn.addEventListener('click', () => {
                search_field.value = ''
                updateInput(search_field)
            })

            search_node.querySelector('label').appendChild(clear_btn)

            clear_btn.style.position = 'absolute'
            clear_btn.style.bottom = '0.1em'
            clear_btn.style.right = '0.5em'
        })
    }

}

onUiLoaded(async () => {
    ClearFilter.main()
})
