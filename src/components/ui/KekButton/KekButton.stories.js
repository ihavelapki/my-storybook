import KekButton from ".";

export default {
    title: 'UI/Buttons/KekButton',
    components: KekButton,
    argTypes: {
        variant: {
            type: 'string',
            description: 'View type',
            defaultValue: 'main',
            options: ['main', 'kek', 'lol', 'link', 'square'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        children: {
            type: 'string',
            description: 'Name',
            defaultValue: 'KEK ME',
            name: 'Kek:'
        }
    }

}

const Template = (arg) => <KekButton {...arg}/>

export const Main = Template.bind({});

Main.args = {
    children: "KEK ME",
    variant: 'square',
    size: 'large',
}