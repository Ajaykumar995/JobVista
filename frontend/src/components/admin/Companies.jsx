import React, { useEffect, useState } from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompany from '@/hooks/useGetAllCompanies'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import ProtectedRoute from './ProtectedRoute'

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));

  },[input]);
    
  return (
    <div>
        <Navbar />
        <div className=' max-w-xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>

        
            <Input
            className="w-fit"
            placeholder ="Filter by name"
            onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={() => navigate("/admin/companies/create")}> New Comapny</Button>
        </div>
        <CompaniesTable />
        </div>
    </div>
  )
}

export default Companies