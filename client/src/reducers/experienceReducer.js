const exp = {
    internals: [
        {
            title: 'creative',
            content: 'Lorem i elit. Ipsa, pariatur.',
        },
        {
            title: 'dynamic',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.',
        },
        {
            title: 'fast',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, pariatur.',
        },

    ],
    skills: [
        {
            img: 'css3',
            level: 30
        },
        {
            img: 'html5',
            level: 50
        },
        {
            img: 'js',
            level: 70
        },
        {
            img: 'node',
            level: 50
        },
        {
            img: 'php',
            level: 20
        },
        {
            img: 'ps',
            level: 60
        },
        {
            img: 'react',
            level: 70
        },
        {
            img: 'redux',
            level: 100
        },
    ]
};

const experienceReducer = (state=exp, action) => {
    switch (action.type){
        default: return state;
    }
}

export default experienceReducer;