import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./paginas/Home";
import Cadastros from "./paginas/Cadastros";

function App() {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />

                <Route path="/cadastros" element={<Layout> <Cadastros /> </Layout>} />

            </Routes>
        </>
    );
}

export default App;