const categories = [
    {
        name: 'Educacion',
        items: [
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
        ]
    }
];

const renderElements = (categories) => {
    const main = document.getElementById("Main");
    console.log(main)
    
    for (category of categories){
        let categoryContainer = document.createElement('div');
        categoryContainer.classList.add('Category');

        let categoryTitle = document.createElement('div');
        categoryTitle.classList.add('Pages');

        for (item of category.items){
            let pageContainer = document.createElement('div');
            pageContainer.classList.add('PageItem');
    
            let pageImage = document.createElement('img'); 
            pageImage.classList.add('PageItem__Preview');
            pageImage.src = item.imageLink;
    
            let pageItemDescription = document.createElement('div');
            pageContainer.classList.add('PageItem__Description');


            let pageItemTitle = document.createElement('h3');
            pageItemTitle.innerText = item.title;

        }
        
        main.appendChild(categoryContainer);
        
        
    }
    console.log("Holis")
}



window.addEventListener('DOMContentLoaded', renderElements(categories));

/* <div class="Category">
            <h2 class="Category__Title">Categoría</h2>
            <div class="Page">
                <div class="PageItem">
                    <div class="PageItem__Description">
                        <h3>Chill & Learn</h3>
                    </div>
                </div>
            </div> */