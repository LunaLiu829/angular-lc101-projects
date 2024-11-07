import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite photos Collection";
  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 = "https://share.icloud.com/photos/092BGzWkBj71tNHkohg6tB8SA";
  image3 =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fmyfavoritesf%2F&psig=AOvVaw3ivYm2EOm6byyX7H5YNSDM&ust=1731086898412000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjnjbDfyokDFQAAAAAdAAAAABAE";

  constructor() {}

  ngOnInit() {}
}
