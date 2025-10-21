import { AnimatedBox } from "./AnimatedBox";


export default {
    component: AnimatedBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
    play: async ({ canvas, userEvent }) => {
        const div = canvas.getByText('I want to expand 😤');
        await userEvent.click(div, { delay: 10000 });
        // await userEvent.click(div, { delay: 1000 });
    }

};

export const Primary = {
    args: {
        label: 'I want to expand 😤',
        backgroundColor: "#0a0a52"
    },
};
export const Secondary = {
    args: {
        label: 'I am a secondary Button 😤',
        backgroundColor: '#000fff'
    },
};