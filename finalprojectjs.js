const more = document.querySelector('.smallspanend');
more.addEventListener('click', showModal);
function showModal() {
    const divModal = document.createElement('div')
    divModal.classList.add('main')
    divModal.insertAdjacentHTML('afterbegin', `
    <div class="newmodal">
        <div class="title-main">
            <h1 class="title">Lorem ipsum</h1>
        </div>
        <p class="pinjs">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
         sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed
         quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
         qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi
         tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
         quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
         consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil 
         molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero
         eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
         atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident,
         similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et 
         harum quidem rerum facilis est et expedita distinctio.</p>
        <button>Okay</button>
    </div>
    `)
    document.body.appendChild(divModal)
}
window.onclick = function (event) {
    let modal = document.querySelector('.newmodal button')
    let close = document.querySelector('.title-main span')
    if (event.target == modal || event.target == close) {
        document.querySelector('.main').remove()
    }
}
const liItems = document.querySelectorAll('.lihome')
for (const item of liItems) {
    item.onclick = function () {
        this.querySelector('.secondmenu').classList.toggle('mainmenu')
    }
}
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.menu_ul')

menuIcon.addEventListener('click', showMenu)


function showMenu() {
    nav.classList.toggle('nav-opened')
    menuIcon.classList.toggle("change");
}