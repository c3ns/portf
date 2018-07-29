

const projects=[
        {
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 1',
            img:'project1',
        },
        {
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 2',
            img:'project1',
        },
        {
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 3',
            img:'project1_img',
        },
        {
            content:'Lorizzle ipsum nizzle sizzle amizzle, consectetuer mah nizzle away.',
            link:'project 4',
            img:'project1',
        }
    ]

const projectsReducer = (state=projects, action) => {
    switch (action.type){
        default: return state;
    }
}

export default projectsReducer;