
let tiles = document.querySelectorAll('.tile')
let background = document.querySelector("#welcome-section");
const options = {
    threshold: .6,
};

const observer = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('toggle-opacity');
                observer.unobserve(entry.target);
            }
        })
    }    
    , options )
 tiles.forEach(tile => {
    observer.observe(tile)
})

const option = {
    threshold: 0,
}
