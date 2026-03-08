const loadIssues = () => {
    const loader = document.getElementById("loader");
    const container = document.getElementById("js-issue-cart");

    loader.classList.remove("hidden");
    container.innerHTML = "";

    let api = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

    fetch(api)
        .then(res => res.json())
        .then(data => {
            loader.classList.add('hidden');
            issueCartDetails(data.data);
        })
        .catch(err => {
            console.log(err);
            loader.innerHTML = "Something went wrong"
        })
}

const handleIssueDetails = (id) => {
    const api = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    fetch(api)
        .then(res => res.json())
        .then(data => showIssueDetails(data.data))
}

const showIssueDetails = (issue) => {
    const modal = document.getElementById("issue-modal");
    const modalContent = document.getElementById("issue-modal-content");

    modalContent.innerHTML = `
        <div class="flex items-center justify-between">
            <h3 class="font-bold text-2xl text-slate-800">${issue.title}</h3>

            ${issue.status === 'open'
            ? '<img class="w-6 h-6" src="../assets/Open-Status.png" alt="icon">'
            : '<img class="w-6 h-6" src="../assets/Closed- Status .png" alt="icon">'
        }
        </div>

        <div class="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <div class="badge text-white px-3 py-1 rounded-full text-xs font-medium border-none ${issue.status === 'open' ? 'bg-green-500' : 'bg-purple-500'}">
                ${issue.status}
            </div>

            <div class="flex items-center gap-1">
                <span>•</span>
                <span>Opened by <span class="font-medium text-gray-600">${issue.author}</span></span>
                <span>•</span>
                <span>${new Date(issue.updatedAt).toLocaleDateString('en-GB')}</span>
            </div>
        </div>

        <div class="flex gap-2 mt-4 flex-wrap">

            <span class="badge border-none text-xs font-semibold gap-1 ${issue.labels[0] === 'bug' ? 'bg-red-100 text-red-600' : issue.labels[0] === 'documentation' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}">
                ${issue.labels[0] === 'bug'
            ? '<i class="fa-solid fa-bug"></i>'
            : issue.labels[0] === 'documentation'
                ? '<i class="fa-solid fa-book"></i>'
                : '<i class="fa-solid fa-wand-magic-sparkles"></i>'
        }
                ${issue.labels[0]}
            </span>

            ${issue.labels[1] ? `
                <span class="badge border-none text-xs font-semibold gap-1 ${issue.labels[1] === 'help wanted' ? 'bg-purple-100 text-purple-600' : 'bg-amber-100 text-amber-600'}">
                    ${issue.labels[1] === 'help wanted'
                ? '<i class="fa-solid fa-hand-holding-heart"></i>'
                : issue.labels[1] === 'good first issue'
                    ? '<i class="fa-solid fa-star"></i>'
                    : '<i class="fa-solid fa-tag"></i>'
            }
                    ${issue.labels[1]}
                </span>
            ` : ""}
        </div>

        <div class="mt-8 text-gray-500 leading-relaxed text-md">
            ${issue.description}
        </div>

        <div class="mt-8 bg-slate-50 rounded-xl p-6 flex justify-between items-start">
            <div>
                <p class="text-gray-400 text-sm mb-1">Assignee:</p>
                <p class="font-bold text-slate-800 text-lg">${issue.assignee}</p>
            </div>

            <div class="text-right">
                <p class="text-gray-400 text-sm mb-2">Priority:</p>
                <div class="font-bold px-4 py-1.5 rounded-lg text-xs
                ${issue.priority === 'high'
            ? 'bg-red-100 text-red-600'
            : issue.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-600'
                : 'bg-gray-200 text-gray-500'
        }">
                    ${issue.priority}
                </div>
            </div>
        </div>

        <div class="mt-8 flex justify-end">
            <button onclick="closeModal()" class="bg-[#4F46E5] text-white px-8 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
                Close
            </button>
        </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

const closeModal = () => {
    const modal = document.getElementById('issue-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

const issueCartDetails = (data) => {
    let issueHTML = "";

    console.log(data);

    data.forEach(issue => {
        issueHTML += `
            <div onClick="handleIssueDetails(${issue.id})" class="rounded-xl p-4 flex flex-col gap-3 bg-white hover:shadow-2xl ${issue.status === 'open' ? "border-t-3 border-green-500" : "border-t-3 border-purple-500"}">
                <div class="flex items-center justify-between">
                    ${issue.status === 'open' ? '<img class="w-5 h-5" src="../assets/Open-Status.png" alt="icon"></img>' : '<img class="w-5 h-5" src="../assets/Closed- Status .png" alt="icon"></img>'}
                    <span class="badge  border-none text-xs font-semibold px-3 ${issue.priority === 'high' ? "bg-red-100 text-red-500" : issue.priority === 'medium' ? "bg-yellow-100 text-yellow-600" : "bg-gray-200 text-gray-500"}">${issue.priority}</span>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-gray-900 leading-snug">${issue.title}
                    </h3>
                    <p class="text-xs text-gray-400 mt-1">${issue.description}</p>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <!-- First Label -->
                    <span class="badge border-none text-xs font-semibold gap-1 ${issue.labels[0] === 'bug' ? 'bg-red-100 text-red-600' : issue.labels[0] === 'documentation' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}">
                        ${issue.labels[0] === 'bug' ? '<i class="fa-solid fa-bug"></i>' : issue.labels[0] === 'documentation' ? '<i class="fa-solid fa-book"></i>' : '<i class="fa-solid fa-wand-magic-sparkles"></i>'}
                        ${issue.labels[0]}
                    </span>

                    <!-- Second Label -->
                    ${issue.labels[1] ? `
                        <span class="badge border-none text-xs font-semibold gap-1 ${issue.labels[1] === 'help wanted' ? 'bg-purple-100 text-purple-600' : 'bg-amber-100 text-amber-600'}">
                            ${issue.labels[1] === 'help wanted' ? '<i class="fa-solid fa-hand-holding-heart"></i>' : issue.labels[1] === 'good first issue' ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-solid fa-tag"></i>'}
                            ${issue.labels[1]}
                        </span>
                    ` : ""}
                </div>
                <div class="text-xs text-gray-400 mt-auto flex justify-between">
                    <div>
                    <span>#${issue.id} </span> by <span class="font-bold">${issue.author.toUpperCase()}</span>
                    </div>
                    <p>${new Date(issue.updatedAt).toLocaleDateString('en-GB')}</p>
                </div>
            </div>
        `

    })
    const issueCartHTMl = document.getElementById("js-issue-cart").innerHTML = issueHTML;

}

loadIssues();
