from pydantic import BaseModel

class TeamMemberBase(BaseModel):
    name: str
    role: str
    bio: str
    photo_url: str
    linkedin: str


class TeamMemberCreate(TeamMemberBase):
    pass


class TeamMember(TeamMemberBase):
    id: int

    class Config:
        from_attributes = True