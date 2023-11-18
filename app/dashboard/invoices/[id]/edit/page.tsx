import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";
import {fetchInvoiceById, fetchCustomers} from '@/app/lib/data';


interface EditInvoiceProps {
    params: {
        id: string;
    }
}

const EditInvoice = async ({params}: EditInvoiceProps) => {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])

    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                {label: 'Invoices', href: '/dashboard/invoices'},
                {
                    label: 'Edit Invoice',
                    href: `/dashboard/invoices/${id}/edit`,
                    active: true
                },
            ]}
            />
            <Form invoice={invoice} customers={customers}/>
        </main>
    )
};

export default EditInvoice;