import classNames from 'classnames';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { useEmployees } from '../features/employees/useEmployees';
import { DeleteIcon, EditIcon, Trash2Icon } from 'lucide-react';

// const employees = [
//   {
//     id: 0,
//     name: 'Walter White',
//     designation: 'Web Developer',
//     experience: 3,
//   },
//   {
//     id: 1,
//     name: 'Walter White',
//     designation: 'Web Developer',
//     experience: 3,
//   },
//   {
//     id: 2,
//     name: 'Walter White',
//     designation: 'Web Developer',
//     experience: 3,
//   },
//   {
//     id: 3,
//     name: 'Walter White',
//     designation: 'Web Developer',
//     experience: 3,
//   },
//   {
//     id: 4,
//     name: 'Walter White',
//     designation: 'Web Developer',
//     experience: 3,
//   },
// ];

export default function Employees() {
  const { isLoading, employees } = useEmployees();

  if (isLoading) return <p>Loading..</p>;

  return (
    <div className="flex flex-1 flex-row h-screen">
      <div className="h-fit w-8/12 shrink-0 flex-col overflow-hidden rounded-lg bg-white m-8 shadow">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Employees
              </h3>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create new employee
              </button>
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
                      <th scope="col">Experience</th>
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
                      const isSelected = null;

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
                          onClick={() => setIsSelected(el.id)}
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
                              'whitespace-nowrap py-4 pl-6 flex text-sm font-medium text-gray-900 space-x-4',
                              {
                                'text-white': isSelected,
                              }
                            )}
                          >
                            <button className="flex items-center">
                              <EditIcon />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center">
                              <Trash2Icon />
                              <span>Delete</span>
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
