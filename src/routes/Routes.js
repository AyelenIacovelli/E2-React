import React from 'react'
import { BrowserRouter, Route, Routes as ReactDomRoutes } from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import { Container } from '../pages/ToDoList/components/Wrapper/GeneralWrapperStyles'
import { AddTask } from '..pages/ToDoList/components/Task/AddTask'
import { List } from '..pages/ToDoList/components/Task/List'
import { ButtonAll } from '..pages/ToDoList/components/Button/ButtonAll'

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ReactDomRoutes>
                    <Route path='/' element={<Home />} />
                    <Route path='toDoList' element={<Container>
                        <AddTask handleAdd={handleAdd} />
                        <List />
                        <ButtonAll handleDeleteAll={handleDeleteAll}></ButtonAll>
                    </Container>} />
                </ReactDomRoutes>
            </Layout>

        </BrowserRouter> //prueba
    )
}

export default Routes