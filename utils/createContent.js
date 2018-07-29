module.exports = async () => {
    if(process.argv[2] === 'createcontent') {
        const PageContent = require('../models/PageContent');
        const _ = require('lodash');
        try {
            if(!_.isEmpty(await PageContent.find())){
                console.log('Content already exist');
                return process.exit(1);
            }

            const content = new PageContent({
                abilities: [],
                skills: [],
                projects: [],
                homeTitle:'empty',
                contactTitle:'empty'
            });

            await content.save();
            console.log('Content created');
            return process.exit(1);
        } catch (err) {
            console.log(err);
            return process.exit(1);
        }
    }
}