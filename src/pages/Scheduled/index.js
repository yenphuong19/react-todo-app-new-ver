import React, { Fragment, useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Modal from 'components/Modal';
import { getListRender, uniqueArray } from 'services/todo';

function Scheduled () {
    const [props] = useContext(Context)
    const sectionHeaderArray = props.state.tasks.all
        .filter(task => { return task.date > new Date() })
        .map(task => task.date)
        .sort((a, b) => {return b < a ? 1 : -1})

    return (
        <Fragment>
            {/* Header */}
            <h1 style={{color: '#d1453b'}}>Scheduled</h1>
            
            {/* Task List */}
            {
                uniqueArray(sectionHeaderArray)
                    .map((date, index) => <TaskList tasks={getListRender(props.state.tasks.all, 'upcoming', date)} sectionHeader={date} key={index}/>)
            }

        </Fragment>
    )
}

export default Scheduled;