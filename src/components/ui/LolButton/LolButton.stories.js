import LolButton from ".";

export default {
    title: 'UI/Buttons/LolButton',
    components: LolButton,

}

const Template = (arg) => <LolButton {...arg}/>

export const Main = Template.bind({});

Main.args = {
    children: "LOL ME",
}