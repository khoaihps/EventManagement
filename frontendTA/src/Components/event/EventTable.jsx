
const EventTable = ({ event, isEditable, change}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedEvent = { ...event, [name]: value };
        change(updatedEvent);
    }

    return (
    <section className="eventTable">
        <div className="table">
            <div className="grid">
                <div className="rounded-lg shadow-2xl bg-white lg:col-span-3 lg:p-6">
                    <form>
                        <div className="relative z-0 w-full mb-2 group">
                            <input type="text" name="name" id="floating_email"
                                   className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                   placeholder=" " required
                                   value={event.name}
                                   readOnly={!isEditable}
                                   onChange={handleChange}
                            />
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="place" id="floating_password"
                                   className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                   placeholder=" " required
                                   value={event.place}
                                   readOnly={!isEditable}
                                   onChange={handleChange}
                            />
                            <label htmlFor="floating_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="status" id="floating_repeat_password"
                                   className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                   placeholder=" " required
                                   value={event.status}
                                   readOnly={!isEditable}
                                   onChange={handleChange}
                            />
                            <label htmlFor="floating_repeat_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="typeOfEvent" id="floating_repeat_password"
                                   className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                   placeholder=" " required
                                   value={event.typeOfEvent}
                                   readOnly={!isEditable}
                                   onChange={handleChange}
                            />
                            <label htmlFor="floating_repeat_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Event</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="budget" id="floating_repeat_password"
                                   className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                   block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                   placeholder=" " required
                                   value={event.budget}
                                   readOnly={!isEditable}
                                   onChange={handleChange}
                            />
                            <label htmlFor="floating_repeat_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Budget</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="datePropose" id="floating_first_name"
                                       className={`${!isEditable ? 'cursor-not-allowed' : ''}
                                       block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       value={event.datePropose}
                                       readOnly={!isEditable}
                                       onChange={handleChange}
                                />
                                <label htmlFor="floating_first_name"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date Proposed</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="deadline" id="floating_last_name"
                                       className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                                       block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                       placeholder=" " required
                                       value={event.deadline}
                                       readOnly={!isEditable}
                                       onChange={handleChange}
                                />
                                <label htmlFor="floating_last_name"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
                            </div>
                        </div>
                        <textarea
                            id="message"
                            rows="4"
                            className={` ${!isEditable ? 'cursor-not-allowed' : ''}
                            block p-2.5 w-full text-sm mb-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                            placeholder="Description..."
                            readOnly={!isEditable}
                            onChange={handleChange}
                            name="description"
                        >
                          {event.description}
                        </textarea>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}

export default EventTable;