$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    navText:['<i class="fa-solid fa-angles-left fa-2x"><i/>', '<i class="fa-solid fa-angles-right fa-2x"><i/>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            item:2,
             nav:true,
        },
       
        1000:{                                  
            items:3,
            smartSpeed:10,
            slideby:6
        }
    }
})