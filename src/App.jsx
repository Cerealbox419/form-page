function App() {
  return (
    <>
      <div class="w-full p-4 text-center">
        <div class="flex flex-col">
          <strong class="text-pink-400 text-4xl md:text-6xl">MELS</strong>
          <span class="text-4xl md:text-6xl italic mb-4 md:mb-10">
            Boutique
          </span>
        </div>
        <h2 class="text-white text-2xl md:text-3xl font-bold">
          Employment Application
        </h2>
        <p class="text-white text-sm md:text-base">
          Fill the form below accurately indicating your potentials and
          suitability to the job you are applying for.
        </p>
      </div>

      <div class="w-full p-4 md:p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div class="max-w-lg mx-auto mt-8">
          <h1 class="text-white text-2xl md:text-3xl font-semibold mb-4">
            Employment Application Form
          </h1>

          <form
            action="https://getform.io/f/qblozgra"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-white"
              >
                Current Home Address
              </label>
              <input
                type="text"
                id="coverLetter"
                name="coverLetter"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-white"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="coverLetter"
                name="coverLetter"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4 flex">
              <div className="flex-1">
                <label
                  htmlFor="workConfirmation"
                  className="block text-sm font-medium text-white"
                >
                  Can you work at nights?
                </label>
              </div>

              <div className="label gap-2 cursor-pointer">
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="workConfirmation"
                    value="yes"
                  />
                  <span className="label-text text-white">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="workConfirmation"
                    value="no"
                  />
                  <span className="label-text text-white">No</span>
                </label>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="flex-1">
                <label
                  htmlFor="ageConfirmation"
                  className="block text-sm font-medium text-white"
                >
                  Are you 18 years or older?
                </label>
              </div>

              <div className="label gap-2 cursor-pointer">
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="ageConfirmation"
                    value="yes"
                  />
                  <span className="label-text text-white">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="ageConfirmation"
                    value="no"
                  />
                  <span className="label-text text-white">No</span>
                </label>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="flex-1">
                <label
                  htmlFor="Confirmation"
                  className="block text-sm font-medium text-white"
                >
                  Are you authorized to work in the US?
                </label>
              </div>

              <div className="label gap-2 cursor-pointer">
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="Confirmation"
                    value="yes"
                  />
                  <span className="label-text text-white">Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    className="radio border-slate-900"
                    name="Confirmation"
                    value="no"
                  />
                  <span className="label-text text-white">No</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-white"
              >
                How did you find out about this position?
              </label>
              <input
                type="text"
                id="coverLetter"
                name="coverLetter"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-white"
              >
                Upload your ID card (Front Image)
              </label>
              <input
                type="file"
                id="resume"
                name="front-image"
                accept="image/*"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-white"
              >
                Upload your ID card (Back Image)
              </label>
              <input
                type="file"
                id="resume"
                name="back-image"
                accept="image/*"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ssn"
                className="block text-sm font-medium text-white"
              >
                Fill in your SSN(For background check)
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
