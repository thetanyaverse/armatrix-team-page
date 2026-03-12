from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import SessionLocal

router = APIRouter()

# dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# GET all team members
@router.get("/team", response_model=list[schemas.TeamMember])
def get_team_members(db: Session = Depends(get_db)):
    members = db.query(models.TeamMember).all()
    return members


# ADD a new team member
@router.post("/team", response_model=schemas.TeamMember)
def create_team_member(member: schemas.TeamMemberCreate, db: Session = Depends(get_db)):
    db_member = models.TeamMember(**member.model_dump())
    db.add(db_member)
    db.commit()
    db.refresh(db_member)
    return db_member

# UPDATE team member
@router.put("/team/{member_id}", response_model=schemas.TeamMember)
def update_team_member(member_id: int, member: schemas.TeamMemberCreate, db: Session = Depends(get_db)):
    db_member = db.query(models.TeamMember).filter(models.TeamMember.id == member_id).first()

    if not db_member:
        return {"error": "Member not found"}

    for key, value in member.model_dump().items():
        setattr(db_member, key, value)

    db.commit()
    db.refresh(db_member)
    return db_member


# DELETE team member
@router.delete("/team/{member_id}")
def delete_team_member(member_id: int, db: Session = Depends(get_db)):
    db_member = db.query(models.TeamMember).filter(models.TeamMember.id == member_id).first()

    if not db_member:
        return {"error": "Member not found"}

    db.delete(db_member)
    db.commit()

    return {"message": "Member deleted successfully"}