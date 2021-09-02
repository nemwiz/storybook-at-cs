import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NewButton} from "./NewButton";


export default {
    title: 'Example/New Button',
    component: NewButton,
    decorators: [
        (Story) => (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Story/>
            </div>
        ),
    ]
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/XTez6vAq5lNsTBb82CGkVj/CS-team-library?node-id=0%3A1'
    }
}

Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    primary: true,
    size: 'large',
    label: 'Button',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    size: 'small',
    label: 'Button',
};
