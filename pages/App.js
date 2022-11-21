/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Tabs } from "../web_modules/material-ui/index.js";
import { AppBar } from "../web_modules/material-ui/index.js";
import { Tab } from "../web_modules/material-ui/index.js";
import { Paper } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { Card } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { CardActionArea } from "../web_modules/material-ui/index.js";
import { CardActions } from "../web_modules/material-ui/index.js";
import { CardHeader } from "../web_modules/material-ui/index.js";
import { CardContent } from "../web_modules/material-ui/index.js";
import { CardMedia } from "../web_modules/material-ui/index.js";
import { Collapse } from "../web_modules/material-ui/index.js";
import { Avatar } from "../web_modules/material-ui/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Module = props => {
    const styles_basic = useStyles4basic(props || {});
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${Paper} key="f1g6xr87">
            </${Paper}>
            <${Card} className=${styles_basic.container + ' ' + styles_basic.item} style=${{"max-width":"300px","display":"inline-block","width":"298.281px","height":"312.734px"}} key="gyvnn7rd">
                <${CardContent}>
                    <${CardMedia} image="img/pic.png" title="Paella dish" style=${{"padding-top":"75%","background-size":"contain","height":"0"}}>
                    </${CardMedia}>
                </${CardContent}>
                <${Collapse} in=${ !!defaultState['expanded_a'] } timeout="auto" unmountOnExit>
                    <${CardContent}>
                        More content...
                    </${CardContent}>
                </${Collapse}>
            </${Card}>
            <${Card} className=${styles_basic.container + ' ' + styles_basic.item} style=${{"max-width":"300px","display":"inline-block","width":"298.281px","height":"312.734px"}} key="j1ncotx">
                <${CardContent} key="dgju6fig">
                    <${CardMedia} image="img/pic.png" title="Paella dish" style=${{"padding-top":"75%","background-size":"contain","height":"0"}} key="h9mga8wt">
                    </${CardMedia}>
                </${CardContent}>
                <${Collapse} in=${ !!defaultState['expanded_a'] } timeout="auto" unmountOnExit key="fat93t19">
                    <${CardContent} key="bl6a0mgh">
                        More content...
                    </${CardContent}>
                </${Collapse}>
            </${Card}>
            <${Card} className=${styles_basic.container + ' ' + styles_basic.item} style=${{"max-width":"300px","display":"inline-block","width":"298.281px","height":"312.734px"}} key="5zknovge">
                <${CardContent} key="8c5gbs39">
                    <${CardMedia} image="img/pic.png" title="Paella dish" style=${{"padding-top":"75%","background-size":"contain","height":"0"}} key="gnmu9dvz">
                    </${CardMedia}>
                </${CardContent}>
                <${Collapse} in=${ !!defaultState['expanded_a'] } timeout="auto" unmountOnExit key="hvp3zbn5">
                    <${CardContent} key="3nefvvwq">
                        More content...
                    </${CardContent}>
                </${Collapse}>
            </${Card}>
            <${Card} className=${styles_basic.container + ' ' + styles_basic.item} style=${{"max-width":"300px","display":"inline-block","width":"298.281px","height":"312.734px"}} key="4gvl6f7x">
                <${CardContent} key="k8psgfv8">
                    <${CardMedia} image="img/pic.png" title="Paella dish" style=${{"padding-top":"75%","background-size":"contain","height":"0"}} key="9wpwxaku">
                    </${CardMedia}>
                </${CardContent}>
                <${Collapse} in=${ !!defaultState['expanded_a'] } timeout="auto" unmountOnExit key="caw1vxy3">
                    <${CardContent} key="9zdw6ub">
                        More content...
                    </${CardContent}>
                </${Collapse}>
            </${Card}>
        </${React.Fragment}>
    `;
};

export default Module;