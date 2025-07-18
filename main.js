const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuElement = document.querySelector("#menu")
const tree = [
    {
        type: "folder",
        name: "src",
        children: [
            {
                type: "folder",
                name: "components",
                children: [
                    { type: "file", name: "Header.js" },
                    { type: "file", name: "Main.js" },
                    { type: "file", name: "Footer.js" },
                ],
            },
            {
                type: "folder",
                name: "jsx",
                children: [
                    { type: "file", name: "Header.jsx" },
                    { type: "file", name: "Main.jsx" },
                    { type: "file", name: "Footer.jsx" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "assets",
        children: [
            {
                type: "folder",
                name: "css",
                children: [
                    { type: "file", name: "index.css" },
                    { type: "file", name: "main.css" },
                    { type: "file", name: "footer.css" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "images",
        children: [
            {
                type: "folder",
                name: "components",
                children: [
                    { type: "image", name: "img-background.jpg" },
                    { type: "image", name: "img-thumbnail.jpg" },
                    { type: "image", name: "img-logo.jpg" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "icons",
        children: [
            {
                type: "folder",
                name: "svg",
                children: [
                    { type: "img", name: "left-arrow.svg" },
                    { type: "img", name: "right-arrow.svg" },
                    { type: "img", name: "bars-menu.svg" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "sass",
        children: [
            {
                type: "folder",
                name: "scss",
                children: [
                    { type: "file", name: "index.scss" },
                    { type: "file", name: "about.scss" },
                    { type: "file", name: "product.scss" },
                    { type: "file", name: "register.scss" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "test",
        children: [
            {
                type: "folder",
                name: "unit",
                children: [
                    { type: "file", name: "test-case.js" },
                    { type: "file", name: "config-test.js" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "docs",
        children: [
            {
                type: "folder",
                name: "components",
                children: [
                    { type: "file", name: "readme.md" },
                    { type: "file", name: "vars.md" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "node_modules",
        children: [
            {
                type: "folder",
                name: "json",
                children: [
                    { type: "file", name: "package.json" },
                    { type: "file", name: "package-lock.json" },
                ],
            },
        ],
    },
    {
        type: "folder",
        name: "database",
        children: [
            {
                type: "folder",
                name: "favicon",
                children: [
                    { type: "file", name: "favicon-32x32.png" },
                    { type: "file", name: "favicon-16x16.png" },
                    { type: "file", name: "favicon.ico" },
                ],
            },
        ],
    },
    { type: "file", name: "index.html" },
    { type: "file", name: "about.html" },
    { type: "file", name: "product.html" },
    { type: "file", name: "register.html" },
    {},
]

function printNode(nodes) {
    const ul = document.createElement("ul")
    for (const node of nodes) {
        if (Object.keys(node).length === 0) {
            console.log(`Thư mục rỗng!`)
        } else {
            const li = document.createElement("li")
            const item = document.createElement("div")
            item.classList.add("item")
            const arrow = document.createElement("i")
            const icon = document.createElement("i")
            const span = document.createElement("span")

            span.textContent = node.name
            item.appendChild(arrow)
            item.appendChild(icon)
            item.appendChild(span)
            li.appendChild(item)

            if (node.type === "folder") {
                li.classList.add("folder")

                arrow.classList.add("arrow")
                arrow.classList.add("fa-solid", "fa-angle-right")

                icon.classList.add("folder--icon")
                icon.classList.add("fa-solid", "fa-folder")

                item.addEventListener("click", (e) => {
                    if (e.target) {
                        e.stopPropagation()
                        li.classList.toggle("open")
                    }
                })
            }

            if (node.type === "file") {
                if (node.name.includes("html")) {
                    icon.classList.add("fa-brands", "fa-html5")
                }
                if (node.name.includes("css")) {
                    icon.classList.add("fa-brands", "fa-css")
                }
                if (node.name.includes("js")) {
                    icon.classList.add("fa-brands", "fa-js")
                }
            }
            if (node.children && node.children.length > 0) {
                const childrenUL = printNode(node.children)
                li.appendChild(childrenUL)

                span.addEventListener("click", (e) => {})
            }
            ul.appendChild(li)
        }
    }
    return ul
}

const menu = printNode(tree)
menuElement.appendChild(menu)
// const items = $$(".item")
// items.forEach((element) => {
//     element.classList.remove("hightligth")
// })
// e.target.classList.toggle("hightlight")
