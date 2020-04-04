import React, {useState, useMemo, useContext} from 'react'
import {AuthContext} from '../../context/auth-context'
import logo from '../../images/LandingPage.png'

import Button from '../../components/UI/Button'
import RadioInput2 from '../../components/Form/RadioInput2'
import WhiteButton from '../../components/UI/WhiteButton'
import Table from '../../components/Dashboard/Table'

const LandingPage = () => {
    const [table, setTable]= useState('kebutuhan')
    const columns = useMemo(
        () => [
            {
                Header: 'No',
                accessor: 'no'
            },
            {
                Header: 'Nama Barang',
                accessor: 'namabarang'
            },
            {
                Header: 'Kuantitas',
                accessor: 'kuantitas'
            }
        ]       
    )
    const data = useMemo(
        () => [
            {
                no: '1',
                namabarang: 'Barang1',
                kuantitas: '1'
            },
            {
                no: '2',
                namabarang: 'Barang2',
                kuantitas: '2'
            },
            {
                no: '3',
                namabarang: 'Barang3',
                kuantitas: '3'
            }
        ]
    )
    const data2 = useMemo(
        () => [
            {
                no: '4',
                namabarang: 'Barang4',
                kuantitas: '4'
            },
            {
                no: '5',
                namabarang: 'Barang5',
                kuantitas: '5'
            },
            {
                no: '6',
                namabarang: 'Barang6',
                kuantitas: '6'
            }
        ]
    )

    const radioChangeHandler = event => {
        setTable(event.target.value)
    }

    const auth = useContext(AuthContext)

    let dashboardLink = '/dashboard/alokasi-bantuan'

    if(auth.role === 'donator'){
        dashboardLink = '/dashboard/donasi-saya'
    } else if(auth.role === 'applicant'){
        dashboardLink = '/dashboard/riwayat-permohonan'
    }

    return(
        <React.Fragment>
            <div className="flex items-center justify-center py-10 lg:flex-row flex-col">
                <img style={{height: '280px', width: '280px'}} src={logo} alt="doctor-with-mask" />
                <div className="md:pl-10 px-10">
                    <p className="text-blue-800 md:mt-0 mt-4 font-bold md:text-4xl text-3xl lg:text-left text-center">Website Kebutuhan Bantuan Barang</p>
                    <p className="text-red-600 font-bold md:text-5xl text-4xl lg:text-left text-center">Covid-19</p>
                    <div className="mt-4 lg:text-left text-center">
                        {!auth.isLogin ?
                            <React.Fragment>
                                <Button to="/login">LOGIN</Button>
                                <WhiteButton to="/daftar">DAFTAR</WhiteButton>
                            </React.Fragment> 
                            : <Button to={dashboardLink}>DASHBOARD</Button>
                        }
                    </div>
                </div>
            </div>

            <p className="text-blue-800 md:mt-0 mt-4 font-bold md:text-4xl text-3xl text-center underline">Data Kebutuhan dan Stok</p>
            <div className="flex flex-row items-center justify-center mb-10">
                <RadioInput2
                    changed={radioChangeHandler}
                    id="kebutuhan"
                    isSelected={table === 'kebutuhan'}
                    label="Data Kebutuhan"
                    value="kebutuhan" />

                <RadioInput2
                    changed={radioChangeHandler}
                    id="stok"
                    isSelected={table === 'stok'}
                    label="Data Stok"
                    value="stok" />
            </div>

            <Table columns={ columns } data={ table === 'kebutuhan' ? data : data2 } />
            <div className="bg-blue-800 text-white py-10 mt-20">
                <h5 className="text-xl text-center">Icon by JustIcon</h5>
            </div>
        </React.Fragment>
    )
}

export default LandingPage