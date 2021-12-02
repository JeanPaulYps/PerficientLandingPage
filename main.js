const categories = [
    {
        name: 'Educacion',
        items: [
            {
                title: 'Jira',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: '../Assets/JIRA.png',
                description: 'Espacio para aprender de programación',
            },
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Espacio para aprender de programación',
            },
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Espacio para aprender de programación',
            },
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Espacio para aprender de programación',
            },
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Espacio para aprender de programación',
            },
            {
                title: 'Chill & Learn',
                link: 'https://morfeo.psl.com.co/training/?sfwd-courses=chill-learn',
                imageLink: 'https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Espacio para aprender de programación',
            },
        ]
    }
];

const createNodeWithClass = (element, className) => {
    let node = document.createElement(element);
    node.classList.add(className);
    return(node);
}

const renderElements = (categories) => {
    const main = document.getElementById("Main");
    console.log(main)
    
    for (category of categories){
        // let categoryContainer = document.createElement('div');
        // categoryContainer.classList.add('Category');
        const categoryContainer = createNodeWithClass('div', 'Category');


        let categoryTitle = document.createElement('h2');
        categoryTitle.classList.add('Category__Title')
        categoryTitle.innerText = category.name;
        // categoryContainer.appendChild(categoryTitle);

        let pages = document.createElement('div');
        pages.classList.add('Pages');
        // categoryContainer.appendChild(pages);

        categoryContainer.append(categoryTitle, pages);

        for (item of category.items){
            
            let pageContainer = document.createElement('div');
            pageContainer.classList.add('PageItem');
            
            let link = document.createElement('a');
            link.href = "#";
            pageContainer.appendChild(link);
            
            let pageImage = document.createElement('img'); 
            pageImage.classList.add('PageItem__Preview');
            pageImage.src = item.imageLink;
            pageContainer.appendChild(pageImage);
    
            let pageItemDescription = document.createElement('div');
            pageItemDescription.classList.add('PageItem__Description');
            pageContainer.appendChild(pageItemDescription);

            let pageItemTitle = document.createElement('h3');
            pageItemTitle.innerText = item.title;
            pageItemDescription.appendChild(pageItemTitle);
            
            let pageItemText = document.createElement('p');
            pageItemText.innerText = item.description;
            pageItemDescription.appendChild(pageItemText);

            pages.appendChild(pageContainer);
        }

        
        main.appendChild(categoryContainer);
        
        
    }
    console.log("Holis")
}

renderElements(categories);

/* <div class="Category">
            <h2 class="Category__Title">Categoría</h2>
            <div class="Page">
                <div class="PageItem">
                    <div class="PageItem__Description">
                        <h3>Chill & Learn</h3>
                    </div>
                </div>
            </div> */