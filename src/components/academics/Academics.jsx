import React, { useState } from "react";
import "./Academics.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

const Academics = (props) => {
    const {
        academics
    } = props;
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="academy container section" id="academy">
            <h2 className="section__title">Academics</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {academics.map((experience, index) => {
                            const { id, title } = experience;
                            return (
                                <Tab className="tab" key={`institute-${id}`}>
                                    <Button>{title}</Button>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {academics.map((experience) => {
                        const { id, institute, subtitle, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} {subtitle} @ {institute}
                                </h2>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Academics;
