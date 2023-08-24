import { useState } from 'react'
import classNames from 'classnames'

import AlertModal from '@/components/common/AlertModal'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import SlideOver from '@/components/ui/slide-over'
import { SlideOverType, useSlideOver } from '../contexts/slideOver'
import { useDeleteEmployee } from '../features/employees/useEmployeeDelete'
import { useEmployees } from '../features/employees/useEmployees'
import CreateEmployeeForm from '../components/employees/CreateEmployeeForm'
import Loader from '../components/common/Loader'

export default function Employees() {
  const [showDeleteEmployeeModal, setDeleteEmployeeModal] = useState(null)

  const { isLoading, employees } = useEmployees()
  const { isDeleting, deleteEmployee } = useDeleteEmployee()
  const { slideOver, setSlideOver } = useSlideOver()

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-row h-screen ml-15">
        <Loader />
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-row h-screen ml-15">
      <div className="h-fit w-6/12 shrink-0 flex-col overflow-hidden rounded-lg bg-white m-8 shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Employees
              </h3>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0">
              <Button
                onClick={() =>
                  setSlideOver({ type: SlideOverType.ADD_EMPLOYEE })
                }
              >
                Create Employee
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col">Employee</th>
                      <th scope="col">ID</th>
                      <th scope="col">Designation</th>
                      <th scope="col">YOE</th>
                      <th scope="col" className="relative py-3 pl-6">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative py-3 pl-6">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees?.map((el, position) => {
                      const isSelected = null

                      return (
                        <TableRow
                          key={el.id}
                          className={classNames(
                            position % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                            'cursor-pointer',
                            {
                              'bg-gradient-to-r from-indigo-500 to-blue-500':
                                isSelected,
                            }
                          )}
                        >
                          <TableCell
                            className={classNames(
                              'whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            {el.name}
                          </TableCell>

                          <TableCell
                            className={classNames(
                              'whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            {el.id}
                          </TableCell>

                          <TableCell
                            className={classNames(
                              'whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            {el.designation}
                          </TableCell>

                          <TableCell
                            className={classNames(
                              'whitespace-nowrap py-4 pl-6 text-sm font-medium text-gray-900',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            {el.experience}
                          </TableCell>

                          <TableCell
                            className={classNames(
                              'whitespace-nowrap py-4 pl-6 flex text-sm font-medium text-gray-900 space-x-6',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            <button
                              className="text-primary"
                              onClick={() =>
                                setSlideOver({
                                  type: SlideOverType.EDIT_EMPLOYEE,
                                  payload: el.id,
                                })
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="text-primary"
                              onClick={() => setDeleteEmployeeModal(el.id)}
                            >
                              Delete
                            </button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <SlideOver
          title={
            slideOver.type === SlideOverType.ADD_EMPLOYEE
              ? 'Create Employee'
              : slideOver.type === SlideOverType.EDIT_EMPLOYEE
              ? 'Edit Employee'
              : ''
          }
          onClose={() => setSlideOver({ type: SlideOverType.NONE })}
          open={
            slideOver.type === SlideOverType.ADD_EMPLOYEE ||
            slideOver.type === SlideOverType.EDIT_EMPLOYEE
          }
        >
          <CreateEmployeeForm
            onClose={() => setSlideOver({ type: SlideOverType.NONE })}
            employeeId={slideOver.payload}
          />
        </SlideOver>

        <AlertModal
          onClose={() => setDeleteEmployeeModal(null)}
          open={Boolean(showDeleteEmployeeModal)}
          confirmationLabel="Delete"
          confirmationVariant="destructive"
          onConfirm={() => {
            deleteEmployee(showDeleteEmployeeModal)
            setDeleteEmployeeModal(null)
          }}
          title="Delete employee?"
          description="This action cannot be undone. This will permanently delete employee and remove your data from our servers."
          isLoading={isDeleting}
          isLoadingLabel="Deleting.."
        />
      </div>
    </div>
  )
}
