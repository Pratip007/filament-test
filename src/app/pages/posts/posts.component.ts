import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { PostService } from "../../services/post.service"

interface Post {
  id: string
  image: string
  title: string
  author: string
  status: "draft" | "published"
  date: string
  commentAuthors: string[]
}

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold">Posts</h1>
          <div class="text-sm text-gray-400">List</div>
        </div>
        <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          New post
        </button>
      </div>
      
      <div class="bg-[#171717] rounded-lg mb-6">
        <div class="p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-2">
              <button class="bg-[#242426] hover:bg-gray-600 text-white p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search" 
              class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-64 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                <th class="p-4 w-8">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </th>
                <th class="p-4 w-16">Image</th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Author</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">Status</th>
                <th class="p-4">Published Date</th>
                <th class="p-4">Comment Authors</th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let post of posts" class="hover:bg-[#242426]">
                <td class="p-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </td>
                <td class="p-4">
                  <img [src]="post.image" alt="Post" class="h-10 w-10 rounded object-cover">
                </td>
                <td class="p-4">{{ post.title }}</td>
                <td class="p-4">{{ post.author }}</td>
                <td class="p-4">
                  <span 
                    [ngClass]="{
                      'bg-amber-500/20 text-amber-500': post.status === 'draft',
                      'bg-green-500/20 text-green-500': post.status === 'published'
                    }"
                    class="px-2 py-1 rounded text-xs font-medium"
                  >
                    {{ post.status }}
                  </span>
                </td>
                <td class="p-4">{{ post.date }}</td>
                <td class="p-4">
                  <div>
                    <div>{{ post.commentAuthors[0] }}</div>
                    <div class="text-xs text-gray-400">Show 5 more</div>
                  </div>
                </td>
                <td class="p-4">
                  <div class="flex space-x-2">
                    <button class="text-gray-400 hover:text-[#f59f0a]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-[#f59f0a]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }
}
