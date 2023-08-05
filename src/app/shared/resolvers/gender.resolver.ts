import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { Gender } from "../models/gender"
import { GenderClient } from "src/app/core/clients/gender.client"
import { inject } from "@angular/core"
import { lastValueFrom } from "rxjs"

export const GenderResolver: ResolveFn<Gender[]> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  genderClient: GenderClient = inject(GenderClient)): Promise<Gender[]> => {
    const genders$ = genderClient.getAllGenders()
    const genders = await lastValueFrom(genders$)
    return genders
  }
