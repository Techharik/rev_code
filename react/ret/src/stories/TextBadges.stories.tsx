// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react';

import TextBadges from './TextBadges';

//👇 This default export determines where your story goes in the story list
const meta = {
    component: TextBadges,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' }
    },
    decorators: [
        (Story) => {
            return <div className='flex justify-center  align-middle'>
                <>
                    <Story />
                </>
            </div>
        }
    ]
} satisfies Meta<typeof TextBadges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const def: Story = {
    // default props
    args: {
        label: 'badges',
        handler: () => alert('Alert the Pages')
    },
};