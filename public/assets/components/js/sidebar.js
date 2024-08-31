const mdis = document.querySelectorAll(".side-icon");

let colors = uniqueColor(mdis.length);

mdis.forEach((mdi, index) => {
  mdi.style.color = colors[index].color;
});
function uniqueColor(size) {
  let colors = [];

  for (let i = 0; i < size; i++) {
    let color;
    do {
      color =
        "#" +
        ((1 << 24) + ((i * 987654321) % (1 << 24)))
          .toString(16)
          .slice(1)
          .toUpperCase();
    } while (colors.some((c) => c.color === color));

    colors.push({
      color: color,
      key: i,
    });
  }

  return colors;
}
 const navLinks = document.querySelectorAll('.link-item a'); 
    const currentURL = window.location.href;
   

    navLinks.forEach(link => {
        const linkURL = link.href;

        if (linkURL === currentURL) {
            link.classList.add('active', 'active-link');
        } else {
            link.classList.remove('active', 'active-link');
        }
    });
