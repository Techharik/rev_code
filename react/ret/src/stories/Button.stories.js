// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.

import Button from './Button';

//👇 This default export determines where your story goes in the story list
export default {
    component: Button,

};

export const FirstStory = {
    args: {
        primary: true,
        label: 'My Button'
    },
};
