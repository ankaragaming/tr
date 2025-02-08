
// function NavigationFooters() {
//     $('footer .nav-parent .h6rplc').on("click", function () {
//         var status = true;
//         if ($(this).closest(".nav-parent").hasClass("active")) {
//             status = false;
//         }
//         $('footer .nav-parent').removeClass("active");
//         if (status) {
//             $(this).closest(".nav-parent").addClass("active");
//         }
//     });
// }

// NavigationFooters();

function NavigationFooters() {
    $('footer .nav-parent .h6rplc').on("click", function (event) {
        if (!$(event.target).is("a")) {
            var status = true;
            if ($(this).closest(".nav-parent").hasClass("active")) {
                status = false;
            }
            $('footer .nav-parent').removeClass("active");
            if (status) {
                $(this).closest(".nav-parent").addClass("active");
            }
        }
    });

    $('footer .nav-parent .h6rplc a.link').on("click", function(event) {
        event.stopPropagation();
    });
}

NavigationFooters();

// Footer alanindaki translate yapisinin kodlari -BT
    // document.addEventListener('DOMContentLoaded', function(){
    //     if(location.href.includes('kurumsal')){
    //         const translateButtonLink = document.querySelector('.translate-button');
    //         const translateContainer = document.querySelector('.translate-container');
    //         const translateArea = document.querySelector('.translate-area');
    //         const translateAreaDropdown = document.querySelector('.translate-area .dropdown');
    //         const translateAreaDropdownMenu = document.querySelector('.translate-area .dropdown .dropdown-menu');
    //         const translateDropdownToggle = translateAreaDropdown?.querySelector('.dropdown-toggle');
    //         const translateDropdownItems = document.querySelectorAll('.translate-area .dropdown-item');
    
            

    //         if(location.href.includes('authkurumsal')){
    //             translateButtonLink.classList.add('auth');
    //         }; 

    //         // Toggle translate area when clicking the translate button
    //         translateButtonLink.addEventListener('click', function(e) {
    //             if(translateContainer.style.display === "none"){
    //                 translateContainer.style.display = "block";
    //                 // Başlangıçta dropdown menüyü gizle
    //                 translateAreaDropdownMenu?.classList.remove('show');
    //             }
    //         });
    
    //         // Close translate area when clicking outside
    //         document.addEventListener('click', function(e) {
    //             if (!translateArea.contains(e.target) && e.target !== translateButtonLink) {
    //                 translateContainer.style.display = 'none';
    //                 translateAreaDropdownMenu.classList.remove('show');
    //                 translateDropdownToggle.classList.remove('dt');
    //             }
    //         });
    
    //         // Prevent closing when clicking inside translate area
    //         translateArea.addEventListener('click', function(e) {
    //             e.stopPropagation();
    //         });
    
    //         // Toggle dropdown menu
    //         translateAreaDropdown.addEventListener('click', function(e) {
    //             e.stopPropagation();
    //             translateAreaDropdownMenu.classList.toggle('show');
    //             translateDropdownToggle.classList.toggle('dt');
    //         });
    
    //         // Handle dropdown item selection
    //         translateDropdownItems.forEach(item => {
    //             item.addEventListener('click', function(e) {
    //                 e.stopPropagation(); // Tıklama event'ini durdur
                    
    //                 // Remove active class from all items
    //                 translateDropdownItems.forEach(i => i.classList.remove('active'));
                    
    //                 // Add active class to clicked item
    //                 this.classList.add('active');
                    
    //                 // Update dropdown toggle text
    //                 translateDropdownToggle.textContent = this.textContent.trim();
                    
    //                 // Close dropdown menu
    //                 translateAreaDropdownMenu.classList.remove('show');
    //                 translateDropdownToggle.classList.remove('dt');
                    
    //                 // Get target language
    //                 const targetLanguage = this.querySelector('.translateButton').dataset.targetLanguage;
    //             });
    //         });
    //         translateContainer.style.display = 'none';
    //     }
    // });     
    

    document.addEventListener('DOMContentLoaded', function(){
        if(location.href.includes('authkurumsal')){
            const translateButtonLink = document.querySelector('.translate-button');
            translateButtonLink.classList.add('auth');
        }
    });
// THE END -BT

