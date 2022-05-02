import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	SearchIcon,
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	DotsHorizontalIcon,
	LocationMarkerIcon,
} from "@heroicons/react/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const days = [
	{ date: "2021-12-27" },
	{ date: "2021-12-28" },
	{ date: "2021-12-29" },
	{ date: "2021-12-30" },
	{ date: "2021-12-31" },
	{ date: "2022-01-01", isCurrentMonth: true },
	{ date: "2022-01-02", isCurrentMonth: true },
	{ date: "2022-01-03", isCurrentMonth: true },
	{ date: "2022-01-04", isCurrentMonth: true },
	{ date: "2022-01-05", isCurrentMonth: true },
	{ date: "2022-01-06", isCurrentMonth: true },
	{ date: "2022-01-07", isCurrentMonth: true },
	{ date: "2022-01-08", isCurrentMonth: true },
	{ date: "2022-01-09", isCurrentMonth: true },
	{ date: "2022-01-10", isCurrentMonth: true },
	{ date: "2022-01-11", isCurrentMonth: true },
	{ date: "2022-01-12", isCurrentMonth: true, isToday: true },
	{ date: "2022-01-13", isCurrentMonth: true },
	{ date: "2022-01-14", isCurrentMonth: true },
	{ date: "2022-01-15", isCurrentMonth: true },
	{ date: "2022-01-16", isCurrentMonth: true },
	{ date: "2022-01-17", isCurrentMonth: true },
	{ date: "2022-01-18", isCurrentMonth: true },
	{ date: "2022-01-19", isCurrentMonth: true },
	{ date: "2022-01-20", isCurrentMonth: true },
	{ date: "2022-01-21", isCurrentMonth: true },
	{ date: "2022-01-22", isCurrentMonth: true, isSelected: true },
	{ date: "2022-01-23", isCurrentMonth: true },
	{ date: "2022-01-24", isCurrentMonth: true },
	{ date: "2022-01-25", isCurrentMonth: true },
	{ date: "2022-01-26", isCurrentMonth: true },
	{ date: "2022-01-27", isCurrentMonth: true },
	{ date: "2022-01-28", isCurrentMonth: true },
	{ date: "2022-01-29", isCurrentMonth: true },
	{ date: "2022-01-30", isCurrentMonth: true },
	{ date: "2022-01-31", isCurrentMonth: true },
	{ date: "2022-02-01" },
	{ date: "2022-02-02" },
	{ date: "2022-02-03" },
	{ date: "2022-02-04" },
	{ date: "2022-02-05" },
	{ date: "2022-02-06" },
];

const people = [
	{
		project: "WordPress Maintenance Agreement",
		task: "Month 65",
		imageUrl:
			"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vegdhmcm7igugogpj0uo",
	},
	{
		project: "TeenLife Website Maintenance",
		task: "Sprint 2 - #ICJ-259",
		imageUrl:
			"data:image/png;base64,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",
	},
	{
		project: "ClearForMe Ongoing Retainer",
		task: "Month 42",
		imageUrl:
			"https://media.glassdoor.com/sql/6968394/clearforme-squareLogo-1647268944315.png",
	},
	{
		project: "Pandemic Action Network Retainer Agreement",
		task: "Month 6",
		imageUrl:
			"https://media-exp1.licdn.com/dms/image/C4D0BAQFUQhQB5tm9Sg/company-logo_200_200/0/1558421969822?e=2147483647&v=beta&t=_dmRAXr9ZO8Dp625OuBuvWQQb5EhI2E-QoLFxXBn_eg",
	},
];

export default function Example() {
	return (
		<>
			{/* Background color split screen for large screens */}
			<div
				className="fixed top-0 left-0 w-1/2 h-full bg-white"
				aria-hidden="true"
			/>
			<div
				className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
				aria-hidden="true"
			/>
			<div className="relative min-h-screen flex flex-col">
				{/* Navbar */}
				<Disclosure as="nav" className="flex-shrink-0 bg-indigo-600">
					{({ open }) => (
						<>
							<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
								<div className="relative flex items-center justify-between h-16">
									{/* Logo section */}
									<div className="flex items-center px-2 lg:px-0 xl:w-64">
										<div className="flex-shrink-0">
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
												alt="Workflow"
											/>
										</div>
									</div>

									{/* Search section */}
									<div className="flex-1 flex justify-center lg:justify-end">
										<div className="w-full px-2 lg:px-6">
											<label htmlFor="search" className="sr-only">
												Search projects
											</label>
											<div className="relative text-indigo-200 focus-within:text-gray-400">
												<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
													<SearchIcon className="h-5 w-5" aria-hidden="true" />
												</div>
												<div className="mt-1 relative flex items-center">
													<input
														type="text"
														name="search"
														id="search"
														placeholder="Search projects"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
													/>
													<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
														<kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
															⌘ + K
														</kbd>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="flex lg:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<MenuAlt1Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
									{/* Links section */}
									<div className="hidden lg:block lg:w-80">
										<div className="flex items-center justify-end">
											<div className="flex">
												<a
													href="#"
													className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
												>
													Projects
												</a>
												<a
													href="#"
													className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
												>
													Reports
												</a>
												<a
													href="#"
													className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
												>
													Admin
												</a>
											</div>
											{/* Profile dropdown */}
											<Menu as="div" className="ml-4 relative flex-shrink-0">
												<div>
													<Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
														<span className="sr-only">Open user menu</span>
														<img
															className="h-8 w-8 rounded-full"
															src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
															alt=""
														/>
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	View Profile
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Settings
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Logout
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="lg:hidden">
								<div className="px-2 pt-2 pb-3">
									<Disclosure.Button
										as="a"
										href="#"
										className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
									>
										Dashboard
									</Disclosure.Button>
									<Disclosure.Button
										as="a"
										href="#"
										className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
									>
										Support
									</Disclosure.Button>
								</div>
								<div className="pt-4 pb-3 border-t border-indigo-800">
									<div className="px-2">
										<Disclosure.Button
											as="a"
											href="#"
											className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
										>
											Your Profile
										</Disclosure.Button>
										<Disclosure.Button
											as="a"
											href="#"
											className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
										>
											Settings
										</Disclosure.Button>
										<Disclosure.Button
											as="a"
											href="#"
											className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
										>
											Sign out
										</Disclosure.Button>
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* 3 column wrapper */}
				<div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
					{/* Left sidebar & main wrapper */}
					<div className="flex-1 min-w-0 bg-white xl:flex">
						<div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-white">
							<div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
								{/* Start left column area */}
								<div className="h-full relative" style={{ minHeight: "12rem" }}>
									<div className="absolute inset-0" />
									<div>
										<h1 className="text-lg font-semibold leading-6 text-gray-900">
											<time dateTime="2022-01-22">January 22, 2022</time>
										</h1>
										<p className="mt-1 text-sm text-gray-500">Saturday</p>
									</div>
									<div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
										<div className="flex items-center text-gray-900">
											<button
												type="button"
												className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
											>
												<span className="sr-only">Previous month</span>
												<ChevronLeftIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</button>
											<div className="flex-auto font-semibold">January</div>
											<button
												type="button"
												className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
											>
												<span className="sr-only">Next month</span>
												<ChevronRightIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</button>
										</div>
										<div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
											<div>M</div>
											<div>T</div>
											<div>W</div>
											<div>T</div>
											<div>F</div>
											<div>S</div>
											<div>S</div>
										</div>
										<div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
											{days.map((day, dayIdx) => (
												<button
													key={day.date}
													type="button"
													className={classNames(
														"py-1.5 hover:bg-gray-100 focus:z-10",
														day.isCurrentMonth ? "bg-white" : "bg-gray-50",
														(day.isSelected || day.isToday) && "font-semibold",
														day.isSelected && "text-white",
														!day.isSelected &&
															day.isCurrentMonth &&
															!day.isToday &&
															"text-gray-900",
														!day.isSelected &&
															!day.isCurrentMonth &&
															!day.isToday &&
															"text-gray-400",
														day.isToday && !day.isSelected && "text-indigo-600",
														dayIdx === 0 && "rounded-tl-lg",
														dayIdx === 6 && "rounded-tr-lg",
														dayIdx === days.length - 7 && "rounded-bl-lg",
														dayIdx === days.length - 1 && "rounded-br-lg"
													)}
												>
													<time
														dateTime={day.date}
														className={classNames(
															"mx-auto flex h-7 w-7 items-center justify-center rounded-full",
															day.isSelected && day.isToday && "bg-indigo-600",
															day.isSelected && !day.isToday && "bg-gray-900"
														)}
													>
														{day.date.split("-").pop().replace(/^0/, "")}
													</time>
												</button>
											))}
										</div>
										<button
											type="button"
											className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Add entry
										</button>
									</div>
								</div>
								{/* End left column area */}
							</div>
						</div>

						<div className="bg-white lg:min-w-0 lg:flex-1">
							<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
								{/* Start main area*/}
								<div className="relative h-full" style={{ minHeight: "36rem" }}>
									<section>
										<h2 className="font-semibold text-gray-900">
											Add a new entry
										</h2>
										<div className="mt-4">
											<label
												htmlFor="project"
												className="block text-sm font-medium text-gray-700"
											>
												Project
											</label>
											<select
												id="project"
												name="project"
												className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option selected>Select the project</option>
												<option>TeenLife Website Maintenance</option>
												<option>ClearForMe Ongoing Retainer</option>
												<option>Homeserve Canada Project</option>
											</select>
										</div>
										<div className="mt-3">
											<label
												htmlFor="activity"
												className="block text-sm font-medium text-gray-700"
											>
												Activity
											</label>
											<select
												id="activity"
												name="activity"
												className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											>
												<option selected>Select the activity</option>
												<option>Month 42</option>
												<option>Internal</option>
											</select>
										</div>

										<div className="mt-3 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
											<div className="sm:col-span-1">
												<label
													htmlFor="time"
													className="block text-sm font-medium text-gray-700"
												>
													Hours
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="time"
														id="time"
														placeholder="0.0"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-5">
												<label
													htmlFor="comments"
													className="block text-sm font-medium text-gray-700"
												>
													Comments
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="comments"
														id="comments"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
														placeholder="A short note on what you did (preferably a ticket identifier)"
														aria-describedby="comments-description"
													/>
												</div>
											</div>
										</div>
										<div className="pt-6 flex justify-center">
											<button
												type="button"
												className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											>
												Cancel
											</button>
											<button
												type="submit"
												className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											>
												Save
											</button>
										</div>
										<h2 className="mt-12 font-semibold text-gray-900">
											Entries for{" "}
											<time dateTime="2022-01-22">January 22, 2022</time>
										</h2>
										<div>
											<div className="pt-4 sm:flex">
												<p className="flex-auto font-semibold text-gray-900 sm:mt-0">
													Homeserve Canada Project
												</p>
												<p className="flex-none sm:ml-6">5 hours</p>
											</div>
											<ol className="text-sm leading-6 text-gray-500 mt-2">
												<li className="sm:flex mb-2">
													<p className="mt-2 flex-auto text-gray-900 sm:mt-0">
														<p className="font-semibold">Ticket #HCA-267</p>
														<div className="w-80 truncate">
															Here is an long description what I did on this
															very day
														</div>
													</p>
													<div className="w-12 sm:ml-6 flex-none">2 hours</div>
												</li>
												<li className="sm:flex mb-2">
													<p className="mt-2 flex-auto text-gray-900 sm:mt-0">
														<p className="font-semibold">Ticket #HCA-420</p>
														<div className="w-80 truncate">
															Incorporate PR changes
														</div>
													</p>

													<div className="w-12 sm:ml-6 flex-none">2 hours</div>
												</li>
												<li className="sm:flex mb-2">
													<p className="mt-2 flex-auto text-gray-900 sm:mt-0">
														<p className="font-semibold">Ticket #HCA-888</p>
														<div className="w-80 truncate">
															Deployed on production
														</div>
													</p>

													<div className="w-12 sm:ml-6 flex-none">1 hours</div>
												</li>
											</ol>
										</div>
										<div className="pt-4 sm:flex">
											<p className="flex-auto font-semibold text-gray-900 sm:mt-0">
												ClearForMe Ongoing Retainer
											</p>
											<p className="flex-none sm:ml-6">2 hours</p>
										</div>
										<ol className="divide-y divide-gray-200 text-sm leading-6 text-gray-500 mt-2">
											<li className="sm:flex mb-2">
												<p className="mt-2 flex-auto text-gray-900 sm:mt-0">
													<p className="font-semibold">Month 42</p>
													<div className="w-80 truncate">
														Here is an long description what I did on this very
														day
													</div>
												</p>

												<div className="w-12 sm:ml-6 flex-none">2 hours</div>
											</li>
										</ol>
									</section>
								</div>
								{/* End main area */}
							</div>
						</div>
					</div>

					<div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
						<div className="h-full pl-6 py-6 lg:w-80">
							{/* Start right column area */}
							<div
								className="h-full relative pl-2 pr-2"
								style={{ minHeight: "16rem" }}
							>
								<div>
									<h2 className="text-base font-medium text-gray-900">
										Recently used
									</h2>
									<div className="flow-root mt-6">
										<ul role="list" className="-my-5 divide-y divide-gray-200">
											{people.map((person) => (
												<li key={person.handle} className="py-4">
													<a href="">
														<div className="flex items-center space-x-4">
															<div className="flex-shrink-0">
																<img
																	className="h-8 w-8 rounded-full"
																	src={person.imageUrl}
																	alt=""
																/>
															</div>
															<div className="flex-1 min-w-0">
																<p className="text-sm font-medium text-gray-900 truncate">
																	{person.project}
																</p>
																<p className="text-sm text-gray-500 truncate">
																	{person.task}
																</p>
															</div>
															<div>
																<div className="inline-flex items-center px-2.5 py-0.5 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		class="h-5 w-5"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																	>
																		<path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
																		<path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
																	</svg>
																</div>
															</div>
														</div>
													</a>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
							{/* End right column area */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
