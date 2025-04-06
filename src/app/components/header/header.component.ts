import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isSubmenuOpen = false;
  isDesktopView = false;

  ngOnInit(): void {
    this.updateViewMode();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) this.isSubmenuOpen = false;
  }

  toggleSubmenu(): void {
    if (!this.isDesktopView) {
      this.isSubmenuOpen = !this.isSubmenuOpen;
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateViewMode();
  }

  private updateViewMode(): void {
    if (typeof window !== 'undefined') {
      this.isDesktopView = window.innerWidth > 768;
    }
  }

  onMouseEnter(): void {
    if (this.isDesktopView) {
      this.isSubmenuOpen = true;
    }
  }

  onMouseLeave(): void {
    if (this.isDesktopView) {
      this.isSubmenuOpen = false;
    }
  }
}
