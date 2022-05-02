/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-white border-b border-gray-200">
					{({ open }) => (
						<>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
								<div className="flex justify-between h-16">
									<div className="flex">
										<div className="flex-shrink-0 flex items-center">
											<img
												className="block lg:hidden h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
												alt="Workflow"
											/>
											<img
												className="hidden lg:block h-8 w-auto"
												src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
												alt="Workflow"
											/>
										</div>
										<div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? "border-indigo-500 text-gray-900"
															: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
														"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
													)}
													aria-current={item.current ? "page" : undefined}
												>
													{item.name}
												</a>
											))}
										</div>
									</div>
									<div className="hidden sm:ml-6 sm:flex sm:items-center">
										<button
											type="button"
											className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>

										{/* Profile dropdown */}
										<Menu as="div" className="ml-3 relative">
											<div>
												<Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
													<span className="sr-only">Open user menu</span>
													<img
														className="h-8 w-8 rounded-full"
														src={user.imageUrl}
														alt=""
													/>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
													{userNavigation.map((item) => (
														<Menu.Item key={item.name}>
															{({ active }) => (
																<a
																	href={item.href}
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	{item.name}
																</a>
															)}
														</Menu.Item>
													))}
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
									<div className="-mr-2 flex items-center sm:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<MenuIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="sm:hidden">
								<div className="pt-2 pb-3 space-y-1">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? "bg-indigo-50 border-indigo-500 text-indigo-700"
													: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
												"block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
											)}
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="pt-4 pb-3 border-t border-gray-200">
									<div className="flex items-center px-4">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={user.imageUrl}
												alt=""
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium text-gray-800">
												{user.name}
											</div>
											<div className="text-sm font-medium text-gray-500">
												{user.email}
											</div>
										</div>
										<button
											type="button"
											className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
									<div className="mt-3 space-y-1">
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as="a"
												href={item.href}
												className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<div className="py-10">
					<header>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold leading-tight text-gray-900">
								Welcome
							</h1>
						</div>
					</header>
					<main>
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<form className="space-y-8 divide-y divide-gray-200">
								<div className="space-y-8 divide-y divide-gray-200">
									<div className="pt-8">
										<div>
											<h3 className="text-lg leading-6 font-medium text-gray-900">
												Personal Information
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												Use a permanent address where you can receive mail.
											</p>
										</div>
										<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
											<div className="sm:col-span-3">
												<label
													htmlFor="project"
													className="block text-sm font-medium text-gray-700"
												>
													Project
												</label>
												<div className="mt-1">
													<select
														id="project"
														name="project"
														autoComplete="country-name"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													>
														<option>Harvest Digital - 123v</option>
														<option>ML Applied - Development Support</option>
														<option>Axioned - Axioned Website 2.0</option>
													</select>
												</div>
											</div>

											<div className="sm:col-span-3">
												<label
													htmlFor="task"
													className="block text-sm font-medium text-gray-700"
												>
													Task
												</label>
												<div className="mt-1">
													<select
														id="task"
														name="task"
														autoComplete="country-name"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													>
														<option>United States</option>
														<option>Canada</option>
														<option>Mexico</option>
													</select>
												</div>
											</div>

											<div className="sm:col-span-3">
												<label
													htmlFor="first-name"
													className="block text-sm font-medium text-gray-700"
												>
													First name
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="first-name"
														id="first-name"
														autoComplete="given-name"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-3">
												<label
													htmlFor="last-name"
													className="block text-sm font-medium text-gray-700"
												>
													Last name
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="last-name"
														id="last-name"
														autoComplete="family-name"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-4">
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700"
												>
													Email address
												</label>
												<div className="mt-1">
													<input
														id="email"
														name="email"
														type="email"
														autoComplete="email"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-6">
												<label
													htmlFor="street-address"
													className="block text-sm font-medium text-gray-700"
												>
													Street address
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="street-address"
														id="street-address"
														autoComplete="street-address"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-2">
												<label
													htmlFor="city"
													className="block text-sm font-medium text-gray-700"
												>
													City
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="city"
														id="city"
														autoComplete="address-level2"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-2">
												<label
													htmlFor="region"
													className="block text-sm font-medium text-gray-700"
												>
													State / Province
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="region"
														id="region"
														autoComplete="address-level1"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>

											<div className="sm:col-span-2">
												<label
													htmlFor="postal-code"
													className="block text-sm font-medium text-gray-700"
												>
													ZIP / Postal code
												</label>
												<div className="mt-1">
													<input
														type="text"
														name="postal-code"
														id="postal-code"
														autoComplete="postal-code"
														className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="pt-8">
										<div>
											<h3 className="text-lg leading-6 font-medium text-gray-900">
												Notifications
											</h3>
											<p className="mt-1 text-sm text-gray-500">
												We'll always let you know about important changes, but
												you pick what else you want to hear about.
											</p>
										</div>
										<div className="mt-6">
											<fieldset>
												<legend className="text-base font-medium text-gray-900">
													By Email
												</legend>
												<div className="mt-4 space-y-4">
													<div className="relative flex items-start">
														<div className="flex items-center h-5">
															<input
																id="comments"
																name="comments"
																type="checkbox"
																className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
															/>
														</div>
														<div className="ml-3 text-sm">
															<label
																htmlFor="comments"
																className="font-medium text-gray-700"
															>
																Comments
															</label>
															<p className="text-gray-500">
																Get notified when someones posts a comment on a
																posting.
															</p>
														</div>
													</div>
													<div className="relative flex items-start">
														<div className="flex items-center h-5">
															<input
																id="candidates"
																name="candidates"
																type="checkbox"
																className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
															/>
														</div>
														<div className="ml-3 text-sm">
															<label
																htmlFor="candidates"
																className="font-medium text-gray-700"
															>
																Candidates
															</label>
															<p className="text-gray-500">
																Get notified when a candidate applies for a job.
															</p>
														</div>
													</div>
													<div className="relative flex items-start">
														<div className="flex items-center h-5">
															<input
																id="offers"
																name="offers"
																type="checkbox"
																className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
															/>
														</div>
														<div className="ml-3 text-sm">
															<label
																htmlFor="offers"
																className="font-medium text-gray-700"
															>
																Offers
															</label>
															<p className="text-gray-500">
																Get notified when a candidate accepts or rejects
																an offer.
															</p>
														</div>
													</div>
												</div>
											</fieldset>
											<fieldset className="mt-6">
												<div>
													<legend className="text-base font-medium text-gray-900">
														Push Notifications
													</legend>
													<p className="text-sm text-gray-500">
														These are delivered via SMS to your mobile phone.
													</p>
												</div>
												<div className="mt-4 space-y-4">
													<div className="flex items-center">
														<input
															id="push-everything"
															name="push-notifications"
															type="radio"
															className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
														/>
														<label
															htmlFor="push-everything"
															className="ml-3 block text-sm font-medium text-gray-700"
														>
															Everything
														</label>
													</div>
													<div className="flex items-center">
														<input
															id="push-email"
															name="push-notifications"
															type="radio"
															className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
														/>
														<label
															htmlFor="push-email"
															className="ml-3 block text-sm font-medium text-gray-700"
														>
															Same as email
														</label>
													</div>
													<div className="flex items-center">
														<input
															id="push-nothing"
															name="push-notifications"
															type="radio"
															className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
														/>
														<label
															htmlFor="push-nothing"
															className="ml-3 block text-sm font-medium text-gray-700"
														>
															No push notifications
														</label>
													</div>
												</div>
											</fieldset>
										</div>
									</div>
								</div>

								<div className="pt-5">
									<div className="flex justify-end">
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
								</div>
							</form>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
