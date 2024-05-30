import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobPosts: any[] = [];
  showAll: boolean = false;

  // showAll: boolean = false;
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder, private b1: UserService, private router: Router, private http: HttpClient) { }


  ngOnInit() {
    // Set the carousel to auto-play every 5 seconds
    this.runCarousel();
    this.fetchJobTitles();
  }

  // fetchJobTitles() {
  //   // this.http.get<any[]>('http://job4jobless.com:9001/fetchjobpost').subscribe(
  //   this.http.get<any[]>('http://localhost:9001/fetchjobpost').subscribe(
  //     {
  //       next: (jobPosts: any) => {
  //         this.jobPosts = jobPosts;
  //         console.log('Fetched job posts:', this.jobPosts);
  //       },
  //       error: (error: any) => {
  //         console.error('Error fetching job posts:', error);
  //       }
  //     }
  //   );
  // }
  fetchJobTitles() {
    this.http.get<any>('https://job4jobless.com:9001/fetchjobpost').subscribe(
      {
        next: (response: any) => {
          this.jobPosts = response.jobPosts || [];
          console.log('Fetched job posts:', this.jobPosts);
        },
        error: (error: any) => {
          console.error('Error fetching job posts:', error);
        }
      }
    );
  }



  runCarousel() {
    const interval = 100; // 5 seconds interval (adjust as needed)

    setInterval(() => {
      document.querySelector('#carouselExample')?.classList.add('next');
      setTimeout(() => {
        document.querySelector('#carouselExample')?.classList.remove('next');
      }, 700); 
    }, interval);
  }

  companies = [
    { name: 'Amazon', logo: 'Bestfit1.svg.png' },
    { name: 'IBM', logo: 'Bestfit6.svg.png' },
    { name: 'Netflix', logo: 'Bestfit8.png' },
    { name: 'Genpact', logo: 'Bestfit2logo.svg.png' },
    { name: 'Alphabet', logo: 'Bestfit3.svg.png' },
    { name: 'Microsoft', logo: 'Bestfit4.svg.png' },
    { name: 'Apple', logo: 'Bestfit5logo.png' },
    { name: 'LG', logo: 'LGlogo.png' },
  ];
  initialDisplayCount = 4;
  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  navigateToJobPage(jobPost: any) {
    // console.log("Company name is: ", jobPost.companyforthisjob);
    // this.router.navigate(['/findjobpage'], { state: { jobPost: jobPost } });
    const url = `https://job4jobless.com/findjobpage?title=${encodeURIComponent(jobPost.jobtitle)}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
  }
}