import KekButton from ".";

export default {
    title: 'UI/Buttons/KekButton',
    components: KekButton,

}

const Template = (arg) => <KekButton {...arg}/>

export const Main = Template.bind({});

Main.args = {
    children: "KEK ME",
    variant: 'square',
    size: 'large',
}