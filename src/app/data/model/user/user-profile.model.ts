export class UserProfileModel {
  id?: number
  name?: string
  avatar?: string
  job?: string

  constructor(val: UserProfileModel ){
    Object.assign(this, val)
  }

}
